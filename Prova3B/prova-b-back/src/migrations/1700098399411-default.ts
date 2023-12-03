import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1700098399411 implements MigrationInterface {
    name = 'Default1700098399411'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "colors" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "background" varchar(7) NOT NULL, "color" varchar(7) NOT NULL, "count" integer NOT NULL DEFAULT (0))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "colors"`);
    }

}
