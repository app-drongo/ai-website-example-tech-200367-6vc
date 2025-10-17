'use client';

/**
 * @editableContentMap
 * {
 *   "text-0": "badge",
 *   "text-1": "mainTitle",
 *   "text-2": "mainTitleHighlight",
 *   "text-3": "mainDescription",
 *   "text-4": "feature1Title",
 *   "text-5": "feature1Description",
 *   "text-6": "feature1Badge",
 *   "text-7": "feature2Title",
 *   "text-8": "feature2Description",
 *   "text-9": "feature2Badge",
 *   "text-10": "feature3Title",
 *   "text-11": "feature3Description",
 *   "text-12": "feature3Badge",
 *   "text-13": "feature4Title",
 *   "text-14": "feature4Description",
 *   "text-15": "feature4Badge",
 *   "text-16": "feature5Title",
 *   "text-17": "feature5Description",
 *   "text-18": "feature5Badge",
 *   "text-19": "feature6Title",
 *   "text-20": "feature6Description",
 *   "text-21": "feature6Badge",
 *   "text-22": "feature7Title",
 *   "text-23": "feature7Description",
 *   "text-24": "feature7Badge",
 *   "text-25": "feature8Title",
 *   "text-26": "feature8Description",
 *   "text-27": "feature8Badge",
 *   "text-28": "feature9Title",
 *   "text-29": "feature9Description",
 *   "text-30": "feature9Badge",
 *   "text-31": "ctaQuestion",
 *   "text-32": "primaryCTA",
 *   "link-0": "primaryCTAHref",
 *   "text-33": "secondaryCTA",
 *   "link-1": "secondaryCTAHref"
 * }
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
  Lock,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

interface FeaturesProps {
  badge?: string;
  mainTitle?: string;
  mainTitleHighlight?: string;
  mainDescription?: string;
  feature1Title?: string;
  feature1Description?: string;
  feature1Badge?: string;
  feature2Title?: string;
  feature2Description?: string;
  feature2Badge?: string;
  feature3Title?: string;
  feature3Description?: string;
  feature3Badge?: string;
  feature4Title?: string;
  feature4Description?: string;
  feature4Badge?: string;
  feature5Title?: string;
  feature5Description?: string;
  feature5Badge?: string;
  feature6Title?: string;
  feature6Description?: string;
  feature6Badge?: string;
  feature7Title?: string;
  feature7Description?: string;
  feature7Badge?: string;
  feature8Title?: string;
  feature8Description?: string;
  feature8Badge?: string;
  feature9Title?: string;
  feature9Description?: string;
  feature9Badge?: string;
  ctaQuestion?: string;
  primaryCTA?: string;
  primaryCTAHref?: string;
  secondaryCTA?: string;
  secondaryCTAHref?: string;
}

export default function Features({
  badge = 'Platform Features',
  mainTitle = 'Built for Modern',
  mainTitleHighlight = 'Tech Teams',
  mainDescription = 'Enterprise-grade infrastructure with developer-first tools. Scale from prototype to production with confidence.',
  feature1Title = 'Sub-100ms Response',
  feature1Description = 'Edge-optimized architecture delivers lightning-fast API responses globally with 99.99% uptime SLA.',
  feature1Badge = 'Performance',
  feature2Title = 'Zero-Trust Security',
  feature2Description = 'SOC 2 Type II compliant with end-to-end encryption, RBAC, and automated threat detection.',
  feature2Badge = 'Security',
  feature3Title = 'Mobile-Native SDKs',
  feature3Description = 'Native iOS, Android, and React Native SDKs with offline-first architecture and real-time sync.',
  feature3Badge = 'Mobile',
  feature4Title = 'Multi-Cloud CDN',
  feature4Description = 'Distributed across 200+ edge locations with intelligent routing and automatic failover.',
  feature4Badge = 'Infrastructure',
  feature5Title = 'Real-Time Analytics',
  feature5Description = 'Custom dashboards with sub-second data freshness, anomaly detection, and predictive insights.',
  feature5Badge = 'Analytics',
  feature6Title = 'White-Label Ready',
  feature6Description = 'Complete UI customization with CSS variables, custom domains, and branded experiences.',
  feature6Badge = 'Branding',
  feature7Title = 'GraphQL & REST APIs',
  feature7Description = 'Type-safe APIs with auto-generated documentation, webhooks, and comprehensive SDKs.',
  feature7Badge = 'Developer',
  feature8Title = 'Expert DevOps Support',
  feature8Description = 'Dedicated technical account managers with 15-minute response times for critical issues.',
  feature8Badge = 'Support',
  feature9Title = 'GDPR Compliant',
  feature9Description = 'Data residency controls, automated compliance reporting, and privacy-by-design architecture.',
  feature9Badge = 'Privacy',
  ctaQuestion = 'Ready to accelerate your development workflow?',
  primaryCTA = 'Start Building',
  primaryCTAHref = '/temp',
  secondaryCTA = 'View Documentation',
  secondaryCTAHref = '/temp',
}: FeaturesProps) {
  const router = useRouter();

  const handlePrimaryAction = () => {
    if (primaryCTAHref.startsWith('http://') || primaryCTAHref.startsWith('https://')) {
      window.open(primaryCTAHref, '_blank', 'noopener,noreferrer');
    } else {
      router.push(primaryCTAHref);
    }
  };

  const handleSecondaryAction = () => {
    if (secondaryCTAHref.startsWith('http://') || secondaryCTAHref.startsWith('https://')) {
      window.open(secondaryCTAHref, '_blank', 'noopener,noreferrer');
    } else {
      router.push(secondaryCTAHref);
    }
  };

  const features = [
    {
      icon: Zap,
      title: feature1Title,
      description: feature1Description,
      badge: feature1Badge,
    },
    {
      icon: Shield,
      title: feature2Title,
      description: feature2Description,
      badge: feature2Badge,
    },
    {
      icon: Smartphone,
      title: feature3Title,
      description: feature3Description,
      badge: feature3Badge,
    },
    {
      icon: Globe,
      title: feature4Title,
      description: feature4Description,
      badge: feature4Badge,
    },
    {
      icon: BarChart3,
      title: feature5Title,
      description: feature5Description,
      badge: feature5Badge,
    },
    {
      icon: Palette,
      title: feature6Title,
      description: feature6Description,
      badge: feature6Badge,
    },
    {
      icon: Code2,
      title: feature7Title,
      description: feature7Description,
      badge: feature7Badge,
    },
    {
      icon: Headphones,
      title: feature8Title,
      description: feature8Description,
      badge: feature8Badge,
    },
    {
      icon: Lock,
      title: feature9Title,
      description: feature9Description,
      badge: feature9Badge,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable="badge">{badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{mainDescription}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      <span data-editable={`feature${index + 1}Badge`}>{feature.badge}</span>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    <span data-editable={`feature${index + 1}Title`}>{feature.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    <span data-editable={`feature${index + 1}Description`}>
                      {feature.description}
                    </span>
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            <span data-editable="ctaQuestion">{ctaQuestion}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="px-6 py-3"
              onClick={handlePrimaryAction}
              data-editable-href="primaryCTAHref"
              data-href={primaryCTAHref}
            >
              <span data-editable="primaryCTA">{primaryCTA}</span>
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3"
              onClick={handleSecondaryAction}
              data-editable-href="secondaryCTAHref"
              data-href={secondaryCTAHref}
            >
              <span data-editable="secondaryCTA">{secondaryCTA}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
