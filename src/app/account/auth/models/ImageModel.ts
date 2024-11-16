import { UserConnected } from "./user";

export interface ImageModel  {
   id?: number;
   name?: string;
   type?: string;
   picByte?: Uint8Array;
   userId?: UserConnected;
 
	
}