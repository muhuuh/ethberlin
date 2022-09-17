const { expect } = require("chai");
var assert = require('assert');
const utils = ethers.utils;

describe("DeasyGame", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    let DeasyGame;
    let deasyGame;


    beforeEach(async function deployDeasyGame() {
  
      // Contracts are deployed using the first signer/account by default
        [owner, otherAccount] = await ethers.getSigners();
  
        DeasyGame = await ethers.getContractFactory("DeasyGame");
        deasyGame = await DeasyGame.deploy();
  
    })
  
    describe("Deployment", function () {
        it("Should deploy sucessfully", async function(){
            const address = deasyGame.address;
            assert.notEqual(address, '' || null || 0x0 || undefined);
        });

        it('Initial counter is set to 0', async function () {
            expect(await(deasyGame.connect(owner).idCounter())).to.eql(0);
        });
    })

    describe("Registration process", function () {
        it("Should set the correct User", async function(){
            await expect(deasyGame.connect(otherAccount).registerUser(otherAccount.address))
                .to.emit(deasyGame, "RegisteredUser")
                .withArgs(1, otherAccount.address);
        });

        it("Sould set the correct Game", async function(){
            await expect(deasyGame.connect(otherAccount).registerGame(1,1))
                .to.emit(deasyGame, "RegisteredGame")
                .withArgs(1, 1);
        });

        it("Should set the points", async function(){
            await expect(deasyGame.connect(otherAccount).savePoints(1,1,1))
                .to.emit(deasyGame, "SavedPoints")
                .withArgs(1,1,1);
        });
    })

    describe("Negative test", function () {
        it("Should not register twice", async function(){
            await deasyGame.connect(otherAccount).registerUser(otherAccount.address);
            await expect(deasyGame.connect(otherAccount).registerUser(otherAccount.address)).to.be.reverted;
        });

        it("Should not reward when already rewarded", async function(){
            const stringInBytes = utils.formatBytes32String("Test");
            await deasyGame.connect(otherAccount).rewardGame(1,1,stringInBytes);
            await expect(deasyGame.connect(otherAccount).rewardGame(1,1,stringInBytes)).to.be.reverted;
        });
    })
});