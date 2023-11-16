import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("styles")
export class Style extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    text!: string;

    @Column()
    image!: string;
}
