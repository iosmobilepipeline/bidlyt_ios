/* eslint-disable prettier/prettier */
import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, Image, ImageBackground } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import NavigationService from '../routes/NavigationService';
import { routes } from '../routes/routes';
import { defaultStyles } from '../asstes/styles';
import { COLORS } from '../asstes/colors';
import Tabicon from './TabIcon';
import { BGImages } from '../asstes';

export const CustomBottomTabBar = ({ state, descriptors, navigation }: any) => {
    const [loginModel, setLoginModel] = useState(false);
    return (
        <>
            <ImageBackground
                style={defaultStyles.bottom_tab_bg}
                source={BGImages.BOTTOM_BG}
            >

                <View style={[styles.tabstyle]}>
                    {state.routes.map((route: any, index: any) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.name;

                        const isFocused = state.index === index;

                        const onPress = () => {

                            console.log(route?.name)
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                            });
                            console.log('rootKey', route.name);

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                            // const event = navigation.emit({
                            //   type: 'tabPress',
                            //   target: route.key,
                            // });
                            // console.log('rootKey', route.name);

                            // if (!isFocused && !event.defaultPrevented) {
                            //   navigation.navigate(route.name);
                            // }
                            // }
                        };

                        const onLongPress = () => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        };

                        return (
                            <TouchableOpacity
                                key={route.key}
                                accessibilityRole="button"
                                accessibilityStates={isFocused ? ['selected'] : []}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={{ flex: 1, }}
                            >


                                <Tabicon label={label} isFocused={isFocused} />

                                {/* <Image style={defaultStyles.Bottom_Icon} source={icons} /> */}
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    tabstyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
