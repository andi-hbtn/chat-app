"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserInput) {
        return this.userRepository.save({
            ...createUserInput,
            password: await this.hashPassword(createUserInput.password)
        });
    }
    async hashPassword(password) {
        return await bcrypt.hash(password, 10);
    }
    async findAll() {
        try {
            return await this.userRepository.find();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async findOne(id) {
        try {
            return await this.userRepository.findOne({ where: { id } });
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async update(id, updateUserInput) {
        try {
            if (updateUserInput.password) {
                this.hashPassword(updateUserInput.password);
            }
            await this.userRepository.update(id, updateUserInput);
            return this.userRepository.findOne({ where: { id } });
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async remove(id) {
        try {
            return await this.userRepository.delete(id);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async verifyUser(email, password) {
        const user = await this.userRepository.findOne({ where: { email } });
        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) {
            throw new common_1.UnauthorizedException('Credentials are not valid');
        }
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map