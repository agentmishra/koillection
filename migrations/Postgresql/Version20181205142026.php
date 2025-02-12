<?php

declare(strict_types=1);

namespace App\Migrations\Postgresql;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20181205142026 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '[Postgresql] Add `visibility` property to `koi_datum`.';
    }

    public function up(Schema $schema): void
    {
        $this->skipIf('postgresql' !== $this->connection->getDatabasePlatform()->getName(), 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE koi_datum ADD visibility VARCHAR(255)');
        $this->addSql('UPDATE koi_datum SET visibility = i.visibility FROM koi_item i WHERE item_id = i.id;');
        $this->addSql('ALTER TABLE koi_datum ALTER visibility SET NOT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->skipIf(true, 'Always move forward.');
    }
}
