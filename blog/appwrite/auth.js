import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

// this is to manage the user state : i.e to login, logout, createAccount and getUserData if logged in

export class AuthService{
    client;
    account;
    constructor(){
        this.client = new Client()
        .setEndpoint(conf.appwriteUrl)          // Your API Endpoint
        .setProject(conf.appwriteProjectId);    // Your project ID

        this.account = new Account(this.client);
    }
    async createAccount({email, password, name}){
        try {
            const userAccount =  await this.account.create(ID.unique(),email, password, name)
            // userAccount contains the userData same as getCurrentUser
            if(userAccount){
                // if account create login automatically
                return this.login({email, password});
            }
            else{
                // return null
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite Service :: createAccount :: error ", error);
            return false;
        }
    }
    async login({email, password}){
        try {
            const session =  await this.account.createEmailSession(email, password)
            return session;
            // returns a session, an object having session id $id, userId, ip, and many other information about the user and their device
        } catch (error) {
            console.log("Appwrite Service :: login :: error ", error);
            return false;
        }
    }
    async logout(){
        try {
            await this.account.deleteSessions();
            return true;
            // it returns nothing, thats why
        } catch (error) {
            console.log("Appwrite Service :: logout :: error ", error);
            return false;
        }
    }
    async getCurrentUser(){
        try {
            const userData = await this.account.get();
            return userData;
            // userData is an object containing {$id, name, email, password, and other informations}
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error ", error);
            return null;
        }
    }
}

export const authService = new AuthService();