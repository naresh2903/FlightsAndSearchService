const { closeSync } = require('fs');
const {CityRepository} = require('../repository/index');

//let instance;
class CityService{


    /**
     *  singleton design pattern in js 
     */
    // constructor() {
    //     if (instance) {
    //       throw new Error("New instance cannot be created!!");
    //     }
    
    //     instance = this;
    //   }

    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;

        } catch (error) {
            console.log("something went wrong at this layer");
            throw {error};
        }
    }

    async deleteCity( cityId){
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("something went wrong at this layer");
            throw {error};
        }
    }

    async updateCity(cityId , data){

        try {
            const city = await this.cityRepository.updateCity(cityId , data);
            return city;
         
        } catch (error) {
            console.log("something went wrong at this layer");
            throw {error};
        }

    }

    async getCity(cityId){

        try {
           const city = await this.cityRepository.getCity(cityId);
           return city ;
         
        } catch (error) {
            console.log("something went wrong at this layer");
            throw {error};
        }

    }



}