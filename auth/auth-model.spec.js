const request = require('supertest')

const db = require('../database/dbConfig')
const users = require('./auth-model')

describe('add()', () => {
    beforeEach(async () => {
        await db ('users').truncate()
    })
    it('should insert to db', async () => {
        // this test will fail id beforeEach() is not declared since
        // username is unique. If beforeEach() is not there and we try to keep testing "Eli" 
        // as the username, it will fail.
        let newUser = await users.add({ username: "Eli", password: "pass" });
        expect(newUser.username).toEqual('Eli')

    })
    describe('add count', () => {
        
        it('should count db adds', async () => {
            let newUser = await users.add({ username: "Eli", password: "pass" });
            expect(newUser.username).toEqual('Eli')
              
            const people = await db('users')
            expect(people).toHaveLength(1)
        })
    })
})