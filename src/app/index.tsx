import { Input } from "@/components/input";
import {View, Text, Image} from "react-native";
import { ArrowRight, Calendar, MapPin, Settings2, UserRoundPlus } from 'lucide-react-native';
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { useState } from "react";

enum StepForm {
    TRIP_DETAILS = 1,
    ADD_EMAIL = 2
}

export default function Index() {
    const [stepForm, setStepForm] = useState(StepForm.TRIP_DETAILS)
    function handleNextStepForm() {
        if (stepForm === StepForm.TRIP_DETAILS) {
            return setStepForm(StepForm.ADD_EMAIL)
        }
    }
    return (
        <View className="flex-1 items-center justify-center px-5">
            <Image source={require("@/assets/logo.png")} className="h-8" resizeMode="contain"/>
            <Text className="text-zinc-400 font-regular text-center text-lg mt-4">
                Convide seus amigos e planeje suas viagens.</Text>
            <View className="w-full bg-zinc-900 p-4 rounded-xl my-8 border border-zinc-800">

                <Input variant="primary">
                    <MapPin size={24} color={colors.zinc[100]}/>
                    <Input.Field placeholder="Para onde você quer ir?"
                    editable={stepForm === StepForm.TRIP_DETAILS}/>
                </Input>

                <Input variant="primary">
                    <Calendar size={24} color={colors.zinc[100]}/>
                    <Input.Field placeholder="Quando você quer ir?"
                    editable={stepForm === StepForm.TRIP_DETAILS}/>
                </Input>
        {stepForm === StepForm.ADD_EMAIL && (
            <>
                <View className="border-b py-3 border-zinc-800">
                    <Button variant="secondary" onPress={()=>setStepForm(StepForm.TRIP_DETAILS)}>
                        <Settings2 size={24} color={colors.zinc[200]}/>
                        <Button.Title>Alterar local/data</Button.Title>
                    </Button>
                </View>
                <Input variant="primary">
                        <UserRoundPlus size={24} color={colors.zinc[100]}/>
                        <Input.Field placeholder="Quem estará na viagem?"/>
                </Input>
            </>
        )}       
                <Button onPress={handleNextStepForm}>
                        <Button.Title>
                            {stepForm === StepForm.TRIP_DETAILS?"Continuar":"Confirmar viagem"}
                        </Button.Title>
                        <ArrowRight size={24} color={colors.lime[950]}/>
                </Button>
            </View>
            <Text className="text-zinc-500 font-regular text-center text-base">
                Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade.
            </Text>
        </View>    
    )
}