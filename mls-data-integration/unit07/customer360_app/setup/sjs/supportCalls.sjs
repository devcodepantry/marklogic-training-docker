'use strict';

const op = require('/MarkLogic/optic');

op
  .fromView('customer360', 'calls')
  .where(op.eq(op.col('customer'), customer))
  .joinDoc('doc', op.col('uri'))
  .select(['customer', 'date_time', 'caller', 'phone', 'reason', 'resolved', 'doc'])
  .orderBy('date_time')
  .result();