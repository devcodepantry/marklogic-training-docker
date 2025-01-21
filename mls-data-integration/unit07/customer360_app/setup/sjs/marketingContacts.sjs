'use strict';

const op = require('/MarkLogic/optic');

op
  .fromView('customer360', 'marketing_contacts')
  .where(op.eq(op.col('company'), customer))
  .joinDoc('doc', op.col('uri'))
  .select(['first_name', 'last_name', 'city', 'phone_work', 'phone_mobile', 'phone_home', 'email', 'mail_ok', 'email_ok', 'frequency', 'doc'])
  .orderBy(['last_name', 'first_name'])
  .limit(10)
  .result();