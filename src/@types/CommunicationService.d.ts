import { Socket } from 'socket.io-client';
export declare enum MessageType {
    CHAT_MESSAGE = "chat message",
    CHAT_CATCHUP = "chat catchup",
    REQUEST_USERNAME = "request username",
    SET_USERNAME = "set username",
    USERNAME_ERROR = "username error",
    USERNAME_SUCCESS = "username success",
    ONLINE_USERS = "online users",
    LIST_ROOMS = "list rooms",
    CREATE_ROOM = "create room",
    CREATE_PRIVATE_ROOM = "create private room",
    CREATE_ROOM_ERROR = "create room error",
    CREATE_ROOM_SUCCESS = "create room success",
    JOIN_ROOM = "join room",
    LEAVE_ROOM = "leave room",
    INVITE_TO_JOIN_ROOM = "invite to join room",
    REQUEST_TO_JOIN_ROOM = "request to join room",
    ROOM_MESSAGE = "room message",
    ROOM_USERS = "room users",
    ROOM_USER_COUNT = "room user count",
    ROOMS = "rooms",
    ROOM_CREATED = "room created",
    ROOM_JOINED = "room joined",
    ROOM_LEFT = "room left",
    ROOM_DELETED = "room deleted"
}
export interface Message {
    room?: string;
    sender: string;
    type: MessageType;
    content: string;
    timestamp: Date;
}
export interface RoomInfo {
    name: string;
    owner: string;
    isPrivate: boolean;
}
export interface RoomContext {
    room: string;
    users: string[];
    messages: Message[];
    socket: Socket;
}
/**
 * CommunicationService is a singleton service that handles connection to the socket.io service.
 */
export declare class CommunicationService {
    private mainSocket;
    private messageSubject;
    private rooms;
    private availableRooms;
    private roomUsers;
    private location;
    private username;
    constructor(_location?: string);
    static instance: CommunicationService;
    static getInstance(): CommunicationService;
    cleanMessage(msg: string): string;
    getSubject(): import("rxjs").Observable<Message>;
    getUserName(): string;
    getOnlineUsers(room?: string): string[];
    setUserName(username: string): void;
    removeUserName(): void;
    getAvailableRooms(): string[];
    joinRoom(room: string): void;
    createRoom(room: string, isPrivate: boolean): void;
    addAvailableRoom(room: RoomInfo): void;
    sendMessage(msg: string, room?: string): void;
    getMessages(room?: string): Message[];
    requestAvailableRooms(): void;
    setupSocketListeners(socket: Socket, room?: string): void;
}
