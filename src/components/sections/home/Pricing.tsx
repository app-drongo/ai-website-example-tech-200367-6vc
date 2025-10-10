'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

/**
 * @editableContentMap
 * { "text-0": "badge", "text-1": "title", "text-2": "subtitle", "text-3": "description", "text-4": "starterName", "text-5": "starterDescription", "text-6": "starterPrice", "text-7": "starterCTA", "text-8": "professionalName", "text-9": "professionalDescription", "text-10": "professionalPrice", "text-11": "professionalCTA", "text-12": "enterpriseName", "text-13": "enterpriseDescription", "text-14": "enterprisePrice", "text-15": "enterpriseCTA", "text-16": "bottomTitle", "text-17": "bottomDescription", "text-18": "bottomCTA" }
 */

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStarterAction = () => {
    router.push('/temp');
  };
  const handleProfessionalAction = () => {
    router.push('/temp');
  };
  const handleEnterpriseAction = () => {
    router.push('/temp');
  };
  const handleDemoAction = () => {
    router.push('/temp');
  };
  // ACTION_PLACEHOLDER_END

  const badge = 'Pricing Plans';
  const title = 'Scale Your Innovation';
  const subtitle = 'with Example Tech';
  const description =
    'Choose the perfect plan to accelerate your tech journey. From startups to enterprises, we have solutions that grow with your ambitions.';

  const starterName = 'Developer';
  const starterDescription = 'Perfect for individual developers and small teams';
  const starterPrice = '$49';
  const starterCTA = 'Start Building';

  const professionalName = 'Scale';
  const professionalDescription = 'Built for growing tech companies and teams';
  const professionalPrice = '$149';
  const professionalCTA = 'Scale Now';

  const enterpriseName = 'Enterprise';
  const enterpriseDescription = 'Custom solutions for large organizations';
  const enterprisePrice = 'Custom';
  const enterpriseCTA = 'Contact Sales';

  const bottomTitle = 'Ready to transform your tech stack?';
  const bottomDescription =
    'Join thousands of developers and companies who trust Example Tech to power their innovation. Custom enterprise solutions available with dedicated support.';
  const bottomCTA = 'Book Strategy Call';

  const plans = [
    {
      name: starterName,
      description: starterDescription,
      price: starterPrice,
      period: '/month',
      badge: null,
      features: [
        'Up to 10 API integrations',
        'Real-time analytics dashboard',
        'Community support',
        '50GB cloud storage',
        'Basic security protocols',
        'Mobile SDK access',
      ],
      cta: starterCTA,
      popular: false,
      action: handleStarterAction,
    },
    {
      name: professionalName,
      description: professionalDescription,
      price: professionalPrice,
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Unlimited API integrations',
        'Advanced AI-powered insights',
        'Priority technical support',
        '500GB cloud storage',
        'Enterprise security suite',
        'Full SDK & API access',
        'Team collaboration tools',
        'Custom webhooks',
        '99.9% uptime SLA',
      ],
      cta: professionalCTA,
      popular: true,
      action: handleProfessionalAction,
    },
    {
      name: enterpriseName,
      description: enterpriseDescription,
      price: enterprisePrice,
      period: '',
      badge: 'Contact Sales',
      features: [
        'Everything in Scale plan',
        'Unlimited cloud storage',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced compliance tools',
        '99.99% uptime guarantee',
        'Dedicated account manager',
        'On-premise deployment',
        'Custom training & onboarding',
      ],
      cta: enterpriseCTA,
      popular: false,
      action: handleEnterpriseAction,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2" data-editable-id="text-0">
            {badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable-id="text-1">{title}</span>
            <span
              className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              data-editable-id="text-2"
            >
              {subtitle}
            </span>
          </h2>
          <p
            className="text-lg text-muted-foreground leading-relaxed mb-8"
            data-editable-id="text-3"
          >
            {description}
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">
                  {index === 0 && <span data-editable-id="text-4">{plan.name}</span>}
                  {index === 1 && <span data-editable-id="text-8">{plan.name}</span>}
                  {index === 2 && <span data-editable-id="text-12">{plan.name}</span>}
                </CardTitle>
                <CardDescription className="text-base mb-6">
                  {index === 0 && <span data-editable-id="text-5">{plan.description}</span>}
                  {index === 1 && <span data-editable-id="text-9">{plan.description}</span>}
                  {index === 2 && <span data-editable-id="text-13">{plan.description}</span>}
                </CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">
                    {index === 0 && <span data-editable-id="text-6">{plan.price}</span>}
                    {index === 1 && <span data-editable-id="text-10">{plan.price}</span>}
                    {index === 2 && <span data-editable-id="text-14">{plan.price}</span>}
                  </span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.action}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {index === 0 && <span data-editable-id="text-7">{plan.cta}</span>}
                  {index === 1 && <span data-editable-id="text-11">{plan.cta}</span>}
                  {index === 2 && <span data-editable-id="text-15">{plan.cta}</span>}
                </Button>

                {plan.name === 'Scale' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No setup fees
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4" data-editable-id="text-16">
            {bottomTitle}
          </h3>
          <p className="text-muted-foreground mb-6" data-editable-id="text-17">
            {bottomDescription}
          </p>
          <Button variant="outline" size="lg" onClick={handleDemoAction} data-editable-id="text-18">
            {bottomCTA}
          </Button>
        </div>
      </div>
    </section>
  );
}
