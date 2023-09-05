import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1693869526215 implements MigrationInterface {
    name = 'Default1693869526215'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_2e5b50f4b7c081eceea476ad128" UNIQUE ("mail")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_2e5b50f4b7c081eceea476ad128"`);
    }

}
