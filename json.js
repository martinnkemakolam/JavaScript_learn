// exclude back refrence
let room ={
    num: 23
}
let meetup = {
    title: 'confrence',
    occupiedBy: [{name: 'john'}, {name: 'pete'}],
    place: room
}

room.occupiedBy = meetup;
meetup.self = meetup

JSON.stringify(meetup, function replacer(key, value){
    ( key != '' && value == meetup) ? undefined :  value
})