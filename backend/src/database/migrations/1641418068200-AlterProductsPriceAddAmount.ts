import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterProductsPriceAddAmount1641418068200 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "products",
            new TableColumn({
             name: "amount",
             type: "numeric",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("products", "price");
    }
}
