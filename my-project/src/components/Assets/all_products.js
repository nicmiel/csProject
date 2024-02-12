import single_room from './single-room.png';
import twin_room from './twin-room.png';
import studio_room from './studio-room.png';
import deluxe_room from './deluxe-room.png';
import room_with_view from './room-with-view.png';
import standard_suite from './standard-suite.png';
import deluxe_suite from './deluxe-suite.png';
import presidential_suite from './presidential-suite.png';
import penthouse_suite from './penthouse-suite.png';

let all_products = [
    {
        id: 1,
        name: "Single Room",
        image: single_room,
        book_price: 150.0,
    },
    {
        id: 2,
        name: "Twin Room",
        image: twin_room,
        book_price: 180.0,
    },
    {
        id: 3,
        name: "Studio Room",
        image: studio_room,
        book_price: 200.0,
    },
    {
        id: 4,
        name: "Deluxe Room",
        image: deluxe_room,
        book_price: 250.0,
    },
    {
        id: 5,
        name: "Room with a View",
        image: room_with_view,
        book_price: 270.0,
    },
    {
        id: 6,
        name: "Standard Suite",
        image: standard_suite,
        book_price: 300.0,
    },
    {
        id: 7,
        name: "Deluxe Suite",
        image: deluxe_suite,
        book_price: 380.0,
    },
    {
        id: 8,
        name: "Presidential Suite",
        image: presidential_suite,
        book_price: 450.0,
    },
    {
        id: 9,
        name: "Penthouse suite",
        image: penthouse_suite,
        book_price: 550.0,
    }
]

export default all_products;