"use strict";
let guest_List = ['Kamran tassori', 'Daniyal nagori', 'Ziakhan'];
for (let i = 0; i < guest_List.length; i++) {
    console.log('Dear Mr.' + guest_List[i] + ',\n\nIt is our pleasure to inivt you in our party.\n\nThank you!\n\n');
}
let absent_guest = 'Daniyal nagori';
let new_guest = 'Ameen alam';
guest_List[0] = new_guest;
for (let i = 0; i < guest_List.length; i++) {
    console.log('Dear Mr.' + guest_List[i] + ',\n\nIt is our pleasure to inivt you in our party.\n\nThank you!\n\n');
}
console.log(`Mr. ${absent_guest}is not coming to the party.`);
