import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { randomBytes, scrypt as _scrypt} from "crypto";
import { promisify } from "util";

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
    constructor(private userService: UsersService){}

   async  signup(email: string, password: string){

        //check if email already exists
        const users = await this.userService.find(email);
        if(users.length) {
            throw new BadRequestException('User with email ' + email + ' already exists');
            
        }

        //hash the user password

        //generate a salt
        const salt = randomBytes(8).toString('hex'); //convert ramdom raw to hex. 8 bytes of data
        //  two char of text, so 16 char long salt.

        //hash the salt and password together
        const hash = (await scrypt(password, salt, 32)) as Buffer; 
        //32 bytes/char? of hash. Buffer to help typescript to determine return type.

        //join the hashed result and the salt together
        const result = salt + '.' + hash.toString('hex');

        //create a new user and save it
        const user = await this.userService.create(email, result);
        //return the user 
        return user;

    }

   async signin(email: string, password: string) {

        const [user] = await this.userService.find(email); //decontruct for single user
        if(!user) {
            throw new NotFoundException('User not found');
        }

        const[salt, storedHash] = user.password.split('.');

        const hash = (await scrypt(password, salt, 32)) as Buffer; 

        // if (storedHash === hash.toString('hex')) {
        //     return user;
        // } else {
        //     throw new BadRequestException('Invalid password');
        // }
        if (storedHash !== hash.toString('hex')) {
            throw new BadRequestException('Invalid password');
            }
        return user;
   }
}