import { ReactNode } from "react"
import { TextInput, View, TextInputProps } from "react-native"
import clsx from "clsx"

type Variant = "primary" | "secondary" | "tertiary"

type InputProps = {
    children: ReactNode
    variant?: Variant
}


function Input({children, variant = "primary"}: InputProps) {
   return (
    <View className={clsx(
        "w-full h-16 flex flex-row items-center gap-2",
        {
            'h-14 px-4 rounded-lg border border-zinc-800' : variant !== "primary",
            "bg-zinc-950": variant === "secondary",
            "bg-zinc-900": variant === "tertiary",
        }
    )}>
        {children}
    </View>
   ) 
}

function Field({...rest}: TextInputProps) {
    return (
        <TextInput className="text-zinc-100 flex-1 text-lg font-regular" {...rest} placeholderTextColor="gray">

        </TextInput>
    )
}

Input.Field = Field

export {Input}