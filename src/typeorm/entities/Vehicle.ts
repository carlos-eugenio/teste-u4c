// Vehicle.ts
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('vehicles')
class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  idClient: string;

  @Column()
  model: string;
  
  @Column()
  carPlate: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn() 
  updated_at: Date;
}

export default Vehicle;