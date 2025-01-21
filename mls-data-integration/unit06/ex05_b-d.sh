$!/bin/bash
rpm -i /home/cent/Downloads/mlsqlodbc-1.3-1.x86_64.rpm
sed -i 's/5432/3366/' /opt/MarkLogic/templates/mlsql.template
odbcinst -i -s -f /opt/MarkLogic/templates/mlsql.template

