import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    surname!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    phone!: number;

    @Column()
    description!: string;

    @Column()
    style!: string;

    @Column()
    image!: string;

    @Column()
    role!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
