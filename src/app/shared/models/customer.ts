export interface Customer{
    id :number; 
    roomNo: Room;
    cName: string;
    address: string,
    phone: string;
    email: string;
    checkIn : string;
    totalPersons: number;
    bookingDays: number;
    advance: number;
    roomId: number
    }

    interface Room{
        roomId : number
    }