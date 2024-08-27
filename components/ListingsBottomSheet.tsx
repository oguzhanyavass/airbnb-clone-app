import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useMemo, useReducer, useRef, useState } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import Listings from '@/components/Listings';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    listings: any[];
    category: string;
}

const ListingsBottomSheet = ({ listings, category }: Props) => {
    const snapPoints = useMemo(() => ['10%', '100%'], []);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [refresh, setRefresh] = useState(0);
    const showMap = () => {
        bottomSheetRef.current?.collapse();
        setRefresh(refresh + 1);
    }
    return (
        <BottomSheet
            style={styles.sheetContainer}
            snapPoints={snapPoints}
            index={1}
            enablePanDownToClose={false}
            ref={bottomSheetRef}
            handleIndicatorStyle={{ backgroundColor: Colors.grey }}>
            <View style={{ flex: 1 }}>
                <Listings listings={listings} category={category} refresh={refresh} />
                <View style={styles.absoluteBtn}>
                    <TouchableOpacity onPress={showMap} style={styles.btn}>
                        <Text style={{ fontFamily: 'mon-sb', color: '#fff' }}>Map</Text>
                        <Ionicons name='map' size={20} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
        </BottomSheet>
    )
}

const styles = StyleSheet.create({
    absoluteBtn: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: Colors.dark,
        padding: 16,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        gap: 8,

    },
    sheetContainer: {
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        borderRadius: 20,
    }
})
export default ListingsBottomSheet