const userService = require("../../src/services/users.services");
const faker = require("faker");
const getDataValues = require("../../src/utils/sequelize");

describe("Probando los servicios de ususario", ()=>{
    let userId = 0;
    let userCreated = {};
    let newUser = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(8),
      phone: faker.phone.phoneNumber('+52(###)#######')
    }

    afterAll(async() => {
      try{
        await userService.deleteUser(userCreated.id);
      }catch(error){
        throw error;
      }
    });

    beforeAll(async() => {
      userCreated = await userService.createUser(newUser);
    });

    it("Deveria de obetener un objeto al llamar el método getAll", async ()=>{
        //AAA
        //arrange
        //act
        const result = await userService.getAllUsers();
        //asert
        expect(result).toEqual(expect.any(Array));
    });
    it("Deveria de obetener un objeto al llamar el método getById", async ()=>{
        //arrange
        const id = 5;
        //act
        const result = await userService.getById();
        //Assert
        expect(result).toEqual(expect.any(Object));
    });
    it("Deveria de obetener un objeto con los datos del usuario que insertamos en la DB", async ()=>{
        const newUser = {
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(8),
            phone: faker.phone.phoneNumber('+52(###)#######')
        }

        const result = await userService.createUser(newUser);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("id");
        expect(result).toHaveProperty("firstname");
        await userService.deleteUser(result.id);
    });
    it("Debería de regresar true al actualizar el registro de forma satisfactoría", async() => {
        //AAA
        userCreated.firstname = "Hector";
        userCreated = getDataValues(userCreated);
        let result = await userService.update(userCreated, userCreated.id);
        expect(result).toBeTruthy();
      });
      it("Debería de regresar true al eliminar el registro de forma satisfactoría", async() => {
        //AAA
        let result = await userService.deleteUser(userCreated.id);
        expect(result).toBeTruthy();
      });
    
});