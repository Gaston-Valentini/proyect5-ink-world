import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("styles")
export class Style extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ length: 1000 })
    text!: string;

    @Column({ length: 1000 })
    image!: string;
}
