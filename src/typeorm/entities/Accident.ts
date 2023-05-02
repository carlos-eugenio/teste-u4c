// Accident.ts
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('accidents')
class Accident {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  idClient: string;

  @Column()
  idVehicle: string;
  
  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn() 
  updated_at: Date;
}

export default Accident;