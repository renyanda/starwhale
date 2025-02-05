import React, { useState } from 'react'
import { Button } from 'baseui/button'
import useTranslation from '@/hooks/useTranslation'
import { createForm } from '@/components/Form'
import { INewUserSchema } from '@user/schemas/user'
import { RadioGroup, Radio } from 'baseui/radio'
import { shouldBeEqual, minLength } from '@/components/Form/validators'
import { passwordMinLength } from '@/consts'
import Input from '@/components/Input'

export interface INewUserFormProps {
    onSubmit: (data: INewUserSchema) => Promise<void>
}

interface IInternalPasswordFormProps extends INewUserSchema {
    randomPassword?: string
    confirmPassword?: string
}

const useRandomValue = 'yes'
const { Form, FormItem, useForm } = createForm<IInternalPasswordFormProps>()

export default function NewUserForm({ onSubmit }: INewUserFormProps) {
    const [t] = useTranslation()
    const [form] = useForm()
    const [useRandom, setUseRandom] = useState(false)
    const [useRandomRadioVal, setUseRandomRadioVal] = useState('no')

    return (
        <Form form={form} onFinish={onSubmit}>
            <FormItem label={t('Username')} name='userName' required>
                <Input size='compact' />
            </FormItem>
            <RadioGroup
                align='horizontal'
                value={useRandomRadioVal}
                onChange={(e) => {
                    setUseRandomRadioVal(e.target.value)
                    setUseRandom(e.target.value === useRandomValue)
                }}
            >
                <Radio value='no'>{t('Enter your password')}</Radio>
                <Radio value={useRandomValue}>{t('Use random password')}</Radio>
            </RadioGroup>
            {!useRandom && (
                <>
                    <FormItem
                        label={t('New Password')}
                        name='userPwd'
                        required
                        validators={[minLength(passwordMinLength, t('Password Too Short'))]}
                    >
                        <Input type='password' size='compact' />
                    </FormItem>
                    <FormItem
                        label={t('Confirm New Password')}
                        name='confirmPassword'
                        validators={[shouldBeEqual(() => form.getFieldValue('userPwd'), t('Password Not Equal'))]}
                        required
                    >
                        <Input type='password' size='compact' />
                    </FormItem>
                </>
            )}
            <FormItem>
                <div style={{ display: 'flex' }}>
                    <div style={{ flexGrow: 1 }} />
                    <Button size='compact'>{t('submit')}</Button>
                </div>
            </FormItem>
        </Form>
    )
}
