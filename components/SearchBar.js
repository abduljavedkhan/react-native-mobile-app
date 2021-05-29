import React, { useContext } from 'react';
import { TextInput, TouchableHighlight, Text } from 'react-native';
import { View } from 'react-native';
import { AppContext } from '../Context/AppContext';
import { Ionicons } from '@expo/vector-icons';
//import * as searchActions from '../store/actions/search';
//import { useSelector, useDispatch } from 'react-redux';

const SearchBar = (props) => {
    //const dispatch = useDispatch();
    const { search, setSearch } = useContext(AppContext);
    //  const searchKeyword = useSelector(state => state.search.searchKeyword);

    const dontShow = false;
    const handleFilter = (text) => {
        setSearch(text);
        // dispatch(searchActions.addToSearchKeyword(text));
    }

    const ClearSearch = () => {
        setSearch('');
        // dispatch(searchActions.addToSearchKeyword(''));
    }

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,

        }}>
            <Ionicons style={{ paddingVertical: 10, paddingLeft: 10, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, backgroundColor: '#fff' }} name="ios-search" size={20} color="gray" />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                value={search}
                // value={searchKeyword}
                onChangeText={text => handleFilter(text)}
                placeholder="Search Menu"
                style={{ backgroundColor: '#fff', width: 200, paddingVertical: 7, paddingHorizontal: 6, fontSize: 18, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
            />
            {/* cross button
           {!!search && (<AntDesign style={{ paddingVertical: 11, paddingRight: 10,borderTopRightRadius:5,borderBottomRightRadius:5, backgroundColor: '#fff' }} 
            name="close"
            size={20}
            color={"gray"}
            onPress={ClearSearch}
          />)} */}
            <Text style={{ color: "#fff", margin: 5, padding: 5, fontSize: 18 }} onPress={ClearSearch}>Cancel</Text>
        </View>
    )
}

export default SearchBar;
