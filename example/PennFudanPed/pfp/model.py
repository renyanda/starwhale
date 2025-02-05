from torchvision.models import ResNet50_Weights
from torchvision.ops.misc import FrozenBatchNorm2d
from torchvision.models.detection import maskrcnn_resnet50_fpn
from torchvision.models.detection.mask_rcnn import MaskRCNNPredictor
from torchvision.models.detection.faster_rcnn import FastRCNNPredictor


def pretrained_model(
    num_classes,
    weights=None,
    model_local_dict=None,
    weights_backbone=None,
):
    # load an instance segmentation model pre-trained pre-trained on COCO
    # model = maskrcnn_resnet50_fpn(weights=weights)
    model = maskrcnn_resnet50_fpn(weights=weights, weights_backbone=weights_backbone)

    # get number of input features for the classifier
    in_features = model.roi_heads.box_predictor.cls_score.in_features
    # replace the pre-trained head with a new one
    model.roi_heads.box_predictor = FastRCNNPredictor(in_features, num_classes)

    # now get the number of input features for the mask classifier
    in_features_mask = model.roi_heads.mask_predictor.conv5_mask.in_channels
    hidden_layer = 256
    # and replace the mask predictor with a new one
    model.roi_heads.mask_predictor = MaskRCNNPredictor(
        in_features_mask, hidden_layer, num_classes
    )

    if model_local_dict:
        model.load_state_dict(model_local_dict)
        overwrite_eps(model, 0.0)
    return model


def overwrite_eps(model, eps: float) -> None:
    """
    This method overwrites the default eps values of all the
    FrozenBatchNorm2d layers of the model with the provided value.
    This is necessary to address the BC-breaking change introduced
    by the bug-fix at pytorch/vision#2933. The overwrite is applied
    only when the pretrained weights are loaded to maintain compatibility
    with previous versions.
    Args:
        model (nn.Module): The model on which we perform the overwrite.
        eps (float): The new value of eps.
    """
    for module in model.modules():
        if isinstance(module, FrozenBatchNorm2d):
            module.eps = eps
