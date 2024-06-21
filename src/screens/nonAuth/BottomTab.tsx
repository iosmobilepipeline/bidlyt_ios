

import { StatusBar, ImageBackground, SafeAreaView, Image, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import Home from './Home';
import Auction from './Auction';
import Dashboard from './Dashboard';
import Favorites from './Favorites';
import { defaultStyles } from '../../asstes/styles';
import { BGImages } from '../../asstes';
import { All_Text } from '../../utils/TextData';



const BottomTab = (props: any) => {


    return (
        <SafeAreaView style={styles.Contenier}>

            <View style={defaultStyles.Bottom_Main_Contenier}>
                <ImageBackground
                    style={defaultStyles.bottom_tab_bg}
                    source={BGImages.BOTTOM_BG}
                >

                    <View style={defaultStyles.Bottom_Icon_Contnier}>

                        <TouchableOpacity style={defaultStyles.Icon_Contenier} onPress={props.onPress}>
                            <Image style={defaultStyles.Bottom_Icon} source={BGImages.HOME} />
                            <Text style={defaultStyles.Icon_Text}>{All_Text.HOME}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[defaultStyles.Icon_Contenier, { left: scale(10) }]} onPress={props.onPress1}>
                            <Image style={defaultStyles.Bottom_Icon} source={BGImages.Auction} />
                            <Text style={defaultStyles.Icon_Text}>{All_Text.Auction}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={defaultStyles.Icon_Contenier_Float}onPress={props.onPress2}>
                            <Image style={defaultStyles.Bottom_Icon_Float} source={BGImages.FLOAT} />
                        </TouchableOpacity>

                        <TouchableOpacity style={defaultStyles.Icon_Contenier} onPress={props.onPress3}>
                            <Image style={defaultStyles.Bottom_Icon} source={BGImages.Heart} />
                            <Text style={defaultStyles.Icon_Text}>{All_Text.Favorites}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={defaultStyles.Icon_Contenier} onPress={props.onPress4}>
                            <Image style={defaultStyles.Bottom_Icon} source={BGImages.Dashboard} />
                            <Text style={defaultStyles.Icon_Text}>{All_Text.Dashboard}</Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

export default BottomTab;

const styles = ScaledSheet.create({
    Scroll_Style: {
        paddingBottom: '40@s'
    },
    Contenier: { flex: 1 }
})

// import { StatusBar, ImageBackground, SafeAreaView, Image, View, Text, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { scale, ScaledSheet } from 'react-native-size-matters';
// import { BGImages } from '../../asstes';
// import { defaultStyles } from '../../asstes/styles';
// import { All_Text } from '../../utils/TextData';


// const BottomTab = (props) => {

//     const renderTab = (iconSource, label, onPress) => {
//         return (
//             <TouchableOpacity style={defaultStyles.Icon_Contenier} onPress={onPress}>
//                 <Image style={defaultStyles.Bottom_Icon} source={iconSource} />
//                 <Text style={defaultStyles.Icon_Text}>{label}</Text>
//             </TouchableOpacity>
//         );
//     };

//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={defaultStyles.Bottom_Main_Contenier}>
//                 <ImageBackground
//                     style={defaultStyles.bottom_tab_bg}
//                     source={BGImages.BOTTOM_BG}>
//                     <View style={defaultStyles.Bottom_Icon_Contnier}>
//                         {renderTab(BGImages.HOME, All_Text.HOME, () => {console.log("Home pressed")})}
//                         {renderTab(BGImages.Auction, All_Text.Auction, () => console.log("Auction pressed"))}
                     
//                         <TouchableOpacity style={defaultStyles.Icon_Contenier_Float} onPress={() => console.log("Floating button pressed")}>
//                             <Image style={defaultStyles.Bottom_Icon_Float} source={BGImages.FLOAT} />
//                         </TouchableOpacity>
//                         {renderTab(BGImages.Heart, All_Text.Favorites, () => console.log("Favorites pressed"))}
//                         {renderTab(BGImages.Dashboard, All_Text.Dashboard, () => console.log("Dashboard pressed"))}
//                     </View>
//                 </ImageBackground>
//             </View>
//         </SafeAreaView>
//     );
// }

// export default BottomTab;

// const styles = ScaledSheet.create({
//     container: {
//         flex: 1
//     }
// });
