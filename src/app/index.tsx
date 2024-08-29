import { Input } from "@/components/input";
import {View, Text, Image} from "react-native";
import { Calendar, MapPin } from 'lucide-react-native';
import { colors } from "@/styles/colors";

export default function Index() {
    return (
        <View className="flex-1 items-center justify-center px-5">
            <Image source={require("@/assets/logo.png")} className="h-8" resizeMode="contain"/>
            <Text className="text-zinc-400 font-regular text-center text-lg mt-4">
                Convide seus amigos e planeje suas viagens.</Text>
            <View className="w-full bg-zinc-900 p-4 rounded-xl my-8 border border-zinc-800">
                <Input variant="primary">
                    <MapPin size={24} color={colors.zinc[100]}/>
                    <Input.Field placeholder="Para onde você quer ir?"/>
                </Input>
                <Input variant="primary">
                    <Calendar size={24} color={colors.zinc[100]}/>
                    <Input.Field placeholder="Quando você quer ir?"/>
                </Input>

            </View>
        </View>    
    )
}