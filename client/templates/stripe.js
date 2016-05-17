Template.stripeSettings.helpers({
  packageData: function () {
    return ReactionCore.Collections.Packages.findOne({
      name: "reaction-stripe",
      shopId: ReactionCore.getShopId()
    });
  }
});

Template.stripe.helpers({
  packageData: function () {
    return ReactionCore.Collections.Packages.findOne({
      name: "reaction-stripe",
      shopId: ReactionCore.getShopId()
    });
  }
});

Template.stripe.events({
  "click [data-event-action=showStripeSettings]": function () {
    ReactionCore.showActionView();
  }
});

AutoForm.hooks({
  "stripe-update-form": {
    /* eslint-disable no-unused-vars*/
    onSuccess: function (operation, result, template) {
      Alerts.removeSeen();
      return Alerts.add("Stripe settings saved.", "success");
    },
    onError: function (operation, error, template) {
      Alerts.removeSeen();
      return Alerts.add("Stripe settings update failed. " + error, "danger");
    }
    /* eslint-enable no-unused-vars*/
  }
});
