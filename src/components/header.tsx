import { Image, View, Text, TouchableOpacity } from "react-native";

import {Feather} from "@expo/vector-icons"

import colors from "tailwindcss/colors";

type HeaderProps ={
    title: string;
    cartQuantityItem? : number;
    isPacked: boolean
}

function Count ({cartQuantityItem, isPacked }: HeaderProps) {
    if (isPacked && cartQuantityItem && cartQuantityItem > 0) {
        return <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
                    <Text className="text-slate-900 font-bold text-xs">{cartQuantityItem}</Text>;
                    </View>
    }
    return null; // Não renderiza nada se a quantidade for 0 ou menor
}

export function Header({ title, cartQuantityItem }: HeaderProps) {
    return (
        <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
            <View className="flex-1">
                <Image source={require('@/assets/logo.png')} className="h-6 w-32" />
                <Text className="text-white text-xl font-heading mt-2">{title}</Text>
            </View>
            <TouchableOpacity className="relative">
                <Count
                        isPacked={true} 
                        cartQuantityItem={cartQuantityItem}
                        />
                <Feather name="shopping-bag" color={colors.white} size={22}/>
            </TouchableOpacity>
        </View> 
    )
} 