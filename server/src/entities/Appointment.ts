import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("appointments")
export class Appointment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    clientId!: number;

    @Column()
    tattooArtistId!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column()
    date!: Date;

    @Column()
    type!: string;

    @Column()
    style!: string;
}
