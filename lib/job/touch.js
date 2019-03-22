'use strict';

/**
 * Updates "lockedAt" time so the job does not get picked up again
 * @name Job#touch
 * @function
 * @returns {undefined}
 */
module.exports = async function() {
  this.attrs.lockedAt = new Date();
  return this.save();
};
