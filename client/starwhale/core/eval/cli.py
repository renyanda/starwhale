import typing as t

import click

from .view import JobTermView, get_term_view, DEFAULT_PAGE_IDX, DEFAULT_PAGE_SIZE


@click.group(
    "eval", help="Evaluation management, create/list/info/compare evaluation job"
)
@click.pass_context
def eval_job_cmd(ctx: click.Context) -> None:
    ctx.obj = get_term_view(ctx.obj)


@eval_job_cmd.command("list", help="List all jobs in the current project")
@click.option("-p", "--project", default="", help="Project URI")
@click.option("--fullname", is_flag=True, help="Show fullname of swmp version")
@click.option("--show-removed", is_flag=True, help="Show removed dataset")
@click.option(
    "--page", type=int, default=DEFAULT_PAGE_IDX, help="Page number for job list"
)
@click.option(
    "--size", type=int, default=DEFAULT_PAGE_SIZE, help="Page size for job list"
)
@click.pass_obj
def _list(
    view: t.Type[JobTermView],
    project: str,
    fullname: bool,
    show_removed: bool,
    page: int,
    size: int,
) -> None:
    view.list(
        project, fullname=fullname, show_removed=show_removed, page=page, size=size
    )


@eval_job_cmd.command("run", help="Run job")
@click.argument("project", default="")
@click.option("--version", default=None, help="Evaluation job version")
@click.option("--model", required=True, help="model uri or model.yaml dir path")
# TODO:support multi dataset
@click.option(
    "--dataset",
    required=True,
    # multiple=True,
    help="dataset uri, one or more",
)
@click.option("--runtime", default="", help="runtime uri")
@click.option("--name", default="default", help="job name")
@click.option("--desc", help="job description")
@click.option(
    "--resource",
    default="cpu:1",
    type=str,
    help="[ONLY Cloud]resource, fmt is resource [name]:[cnt], such as cpu:1, gpu:2",
)
@click.option(
    "--use-docker",
    is_flag=True,
    help="[ONLY Standalone]use docker to run evaluation job",
)
@click.option("--gencmd", is_flag=True, help="[ONLY Standalone]gen docker run command")
@click.option("--step", default="", help="Evaluation run step")
@click.option("--task-index", default=0, help="Index of tasks in the current step")
def _run(
    project: str,
    version: str,
    model: str,
    dataset: str,
    runtime: str,
    name: str,
    desc: str,
    resource: str,
    use_docker: bool,
    gencmd: bool,
    step: str,
    task_index: int,
) -> None:
    JobTermView.run(
        project_uri=project,
        version=version,
        model_uri=model,
        dataset_uris=[dataset],
        runtime_uri=runtime,
        name=name,
        desc=desc,
        resource=resource,
        gencmd=gencmd,
        use_docker=use_docker,
        step=step,
        task_index=task_index,
    )


@eval_job_cmd.command("remove", help="Remove job")
@click.argument("job")
@click.option("-f", "--force", is_flag=True, help="Force to remove")
def _remove(job: str, force: bool) -> None:
    click.confirm("continue to remove?", abort=True)
    JobTermView(job).remove(force)


@eval_job_cmd.command("recover", help="Recover removed job")
@click.argument("job")
@click.option("-f", "--force", is_flag=True, help="Force to recover")
def _recover(job: str, force: bool) -> None:
    JobTermView(job).recover(force)


@eval_job_cmd.command("pause", help="Pause job")
@click.argument("job")
@click.option("-f", "--force", is_flag=True, help="Force to pause")
def _pause(job: str, force: bool) -> None:
    click.confirm("continue to pause?", abort=True)
    JobTermView(job).pause(force)


@eval_job_cmd.command("resume", help="Resume job")
@click.argument("job")
@click.option("-f", "--force", is_flag=True, help="Force to resume")
def _resume(job: str, force: bool) -> None:
    JobTermView(job).resume(force)


@eval_job_cmd.command("cancel", help="Cancel job")
@click.argument("job")
@click.option("-f", "--force", is_flag=True, help="Force to cancel")
def _cancel(job: str, force: bool) -> None:
    click.confirm("continue to cancel?", abort=True)
    JobTermView(job).cancel(force)


@eval_job_cmd.command("info", help="Inspect job details")
@click.argument("job")
@click.option(
    "--page", type=int, default=DEFAULT_PAGE_IDX, help="Page number for tasks list"
)
@click.option(
    "--size", type=int, default=DEFAULT_PAGE_SIZE, help="Page size for tasks list"
)
@click.pass_obj
def _info(view: t.Type[JobTermView], job: str, page: int, size: int) -> None:
    view(job).info(page, size)


@eval_job_cmd.command("compare")
@click.argument("base_job", nargs=1)
@click.argument("job", nargs=-1)
def _compare(base_job: str, job: t.List[str]) -> None:
    """
    [ONLY Standalone]Compare the result of evaluation job

    BASE_JOB: job uri

    JOB: job uri
    """
    JobTermView(base_job).compare(job)
