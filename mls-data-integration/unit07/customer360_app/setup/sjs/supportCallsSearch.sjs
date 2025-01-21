'use strict';

const op = require('/MarkLogic/optic');

if (from && to && customer) {
  op
    .fromView('customer360', 'calls')
    .where(op.eq(op.col('customer'), customer))
    .where(op.ge(op.col('date_time'), from))
    .where(op.le(op.col('date_time'), to))
    .joinDoc('doc', op.col('uri'))
    .select(['customer', 'date_time', 'caller', 'phone', 'reason', 'resolved', 'doc'])
    .orderBy('date_time')
    .result();
} else if (term && customer) {
  op
    .fromView('customer360', 'calls', null, null)
    .where(cts.wordQuery(term))
    .where(op.eq(op.col('customer'), customer))
    .joinDoc('doc', op.col('uri'))
    .select(['customer', 'date_time', 'caller', 'phone', 'reason', 'resolved', 'doc'])
    .orderBy('date_time')
    .result();
} else if (term && !customer) {
  op
    .fromView('customer360', 'calls', null, null)
    .where(cts.wordQuery(term))
    .joinDoc('doc', op.col('uri'))
    .select(['customer', 'date_time', 'caller', 'phone', 'reason', 'resolved', 'doc'])
    .orderBy('date_time')
    .result();
} else {
  op
    .fromView('customer360', 'calls')
    .where(op.eq(op.col('customer'), customer))
    .joinDoc('doc', op.col('uri'))
    .select(['customer', 'date_time', 'caller', 'phone', 'reason', 'resolved', 'doc'])
    .orderBy('date_time')
    .result();
}