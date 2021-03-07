export interface Room{
    id: number;
    rtCode: RoomType;
    status: boolean;
    rtId : number
}

interface RoomType{
    rtId: number;
}