import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";

@Entity("gallery")
export class Gallery extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    tattooArtistId!: number;

    @Column()
    image!: string;

    @Column()
    style!: string;
}