for (let index = 0; index < 10; index++) {
    if (localStorage.getItem("Slot_number" + index) != null) {
        localStorage.removeItem("Slot_number" + index);
    }    
}      