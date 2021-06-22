import React, {useState} from 'react';
import axios from 'axios';

function Hotels() {
    const [hotelName, setHotelName] = useState(null);
    const [getHotelName, setGetHotelName] = useState(null);
    const test = [];
    const handleChange = (e)=>{
        setHotelName(e.target.value);
        console.log(hotelName);
    }
    const handleSearch = (e)=> {
        fetchHotelName();
        };
    const fetchHotelName = async() => {
        const response = await axios.post('http://localhost:3001/text', {
            name: hotelName
         });
        };

    const getdb = async() => {
        const getResponse = await axios.get('http://localhost:3001/get/test');
        for(let i = 0; i < getResponse.data.length; i++) {
            console.log(getResponse.data[i].hotelName);
            test.push(getResponse.data[i].hotelName);
            console.log(test);
            setGetHotelName(test);
            console.log(getHotelName);
        }
    }
        return (
            <div>
                <h1>호텔 검색</h1>
                <select id="hotels-select" onChange={handleChange}>
                    <option value="호텔1">호텔1</option>
                    <option value="호텔2">호텔2</option>
                    <option value="호텔3">호텔3</option>
                </select>
                <button id="hotel-search" onClick={handleSearch}>검색</button>
                <button id="get" onClick={getdb}>데이터 불러오기</button>
                <div>{getHotelName}</div>
            </div>
        )
    };

export default Hotels;