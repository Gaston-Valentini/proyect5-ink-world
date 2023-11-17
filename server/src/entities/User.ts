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

    @Column({ default: "" })
    description!: string;

    @Column({ default: "" })
    style!: string;

    @Column({
        default:
            "https://www.shutterstock.com/image-vector/avatar-man-icon-profile-placeholder-600nw-1229859850.jpg",
    })
    image!: string;

    @Column()
    role!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
