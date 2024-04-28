import { Client, Databases, Query, Storage, ID} from "appwrite";
import conf from "../conf/conf";


export class Service{
    client;
    databases;
    storage;

    constructor(){
        this.client = new Client()
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId) // Your project ID

        this.databases = new Databases(this.client)

        this.storage = new Storage(this.client)
    }

    // Post Services
    async createPost({title, content, featuredImage, status, userId, slug}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {title, content, featuredImage, status, userId});
            // returns a document
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error ", error)
            return false;
        }
    };

    // We are not providing the userId, since the user logged in can only post so we will take it from there.
    // Also, we have to send the slug seperately, as syntax
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {title, content, featuredImage, status, userId});
            // this returns the updated document
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error ", error)
            return false;
        }
    };

    async deletePost(slug){
        try {
            this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
            return true; //if deleted
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error ", error)
            return false;
        }
    };

    // To see one post, i.e the clicked one
    // We can pass queries over here also
    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug); 
            // returns document
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error ", error)
            return false;
        }
    };

    // To see all posts, like in instagram feed, for this we are going to pass some queries
    // Here we have only one query, i.e we only want posts whose status is active
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
            // returns a document list
        } catch (error) {
            console.log("Appwrite Service :: getPosts :: error ", error)
            return false;
        }
    };

    // File Upload Services
    async uploadFile(file){
        try {
            return await this.storage.createFile(conf.appwriteBucketId, ID.unique(), file);
            // returns a file
        } catch (error) {
            console.log("Appwrite Services :: uploadFile :: error ", error);
            return false;
        } 
    };

    async deleteFile(fileId){
        try {
            this.storage.createFile(conf.appwriteBucketId, fileId);
            return true
            // returns true once file is deleted
        } catch (error) {
            console.log("Appwrite Services :: deleteFile :: error ", error);
            return false;
        } 
    };

    getFilePreview(fileId){
        return this.storage.getFilePreview(conf.appwriteBucketId, fileId).href;
        // in the documentation, there is nothing in the response
        // but as per tutorial, we got to know, .href solves it
    };

}

export const service = new Service();