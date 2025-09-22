// Facebook Pixel utility functions
declare global {
  interface Window {
    fbq: (action: string, event: string, data?: any) => void;
    _fbq: any;
  }
}

// Wait for pixel to be ready with timeout
const waitForPixel = (timeout = 5000): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    }
    
    const startTime = Date.now();
    
    const checkPixel = () => {
      if (typeof window.fbq === 'function' && window._fbq && window._fbq.loaded) {
        resolve();
      } else if (Date.now() - startTime > timeout) {
        reject(new Error('Facebook Pixel timeout'));
      } else {
        setTimeout(checkPixel, 100);
      }
    };
    
    checkPixel();
  });
};

// Enhanced tracking with better error handling
export const trackPageView = async (url?: string) => {
  if (typeof window === 'undefined') return;
  
  try {
    await waitForPixel();
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView', {
        content_name: url || window.location.pathname,
        content_category: 'page_view'
      });
      console.log('Facebook Pixel: PageView tracked', url ? `for ${url}` : '');
    }
  } catch (error) {
    console.warn('Facebook Pixel: Failed to track PageView', error);
  }
};

export const trackEvent = async (eventName: string, data?: any) => {
  if (typeof window === 'undefined') return;
  
  try {
    await waitForPixel();
    if (typeof window.fbq === 'function') {
      window.fbq('track', eventName, {
        ...data,
        content_category: 'website_interaction',
        timestamp: new Date().toISOString()
      });
      console.log('Facebook Pixel: Event tracked', eventName, data);
    }
  } catch (error) {
    console.warn('Facebook Pixel: Failed to track event', eventName, error);
  }
};

// Enhanced business events for better ad optimization
export const trackLead = (data?: any) => {
  trackEvent('Lead', {
    content_name: 'Contact Form Submission',
    content_category: 'lead_generation',
    value: 1,
    currency: 'USD',
    ...data
  });
};

export const trackContact = (data?: any) => {
  trackEvent('Contact', {
    content_name: 'Contact Method Click',
    content_category: 'contact_interaction',
    ...data
  });
};

export const trackPurchase = (value?: number, currency = 'USD', planName?: string, userData?: any) => {
  trackEvent('Purchase', {
    value: value,
    currency: currency,
    content_name: planName || 'Website Package',
    content_category: 'purchase',
    content_type: 'product',
    // Enhanced matching data
    em: userData?.email ? btoa(userData.email.toLowerCase().trim()) : undefined,
    ph: userData?.phone ? btoa(userData.phone.replace(/\D/g, '')) : undefined,
    fn: userData?.firstName ? btoa(userData.firstName.toLowerCase().trim()) : undefined,
    ln: userData?.lastName ? btoa(userData.lastName.toLowerCase().trim()) : undefined,
    // Additional purchase data
    num_items: 1,
    content_ids: [planName || 'template'],
    custom_data: {
      template_type: 'ecommerce',
      business_type: 'web_development',
      delivery_method: 'digital'
    }
  });
};

export const trackViewContent = (contentName?: string, contentType = 'page') => {
  trackEvent('ViewContent', {
    content_name: contentName,
    content_category: 'content_view',
    content_type: contentType
  });
};

// New events for better conversion tracking
export const trackInitiateCheckout = (planName: string, value: number, currency = 'USD') => {
  trackEvent('InitiateCheckout', {
    content_name: planName,
    content_category: 'checkout_initiated',
    value: value,
    currency: currency,
    num_items: 1
  });
};

export const trackAddToCart = (planName: string, value: number, currency = 'USD') => {
  trackEvent('AddToCart', {
    content_name: planName,
    content_category: 'plan_selected',
    value: value,
    currency: currency,
    content_type: 'product'
  });
};

export const trackCompleteRegistration = (method: string) => {
  trackEvent('CompleteRegistration', {
    content_name: 'Contact Form',
    content_category: 'registration',
    registration_method: method
  });
};

export const trackSchedule = (serviceType: string) => {
  trackEvent('Schedule', {
    content_name: 'Consultation Booking',
    content_category: 'appointment',
    service_type: serviceType
  });
};

export const trackSearch = (searchTerm: string) => {
  trackEvent('Search', {
    search_string: searchTerm,
    content_category: 'search'
  });
};

// Enhanced form tracking
export const trackFormSubmission = (formType: string, data?: any) => {
  trackEvent('Lead', {
    content_name: `${formType} Form Submission`,
    content_category: 'form_submission',
    form_type: formType,
    value: 1,
    currency: 'USD',
    ...data
  });
};

// Button click tracking
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('CustomizeProduct', {
    content_name: buttonName,
    content_category: 'button_click',
    button_location: location
  });
};

// Advanced conversion tracking for better optimization
export const trackAdvancedPurchase = (purchaseData: {
  value: number;
  currency: string;
  productName: string;
  userData: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
  };
  templateType?: string;
  businessType?: string;
}) => {
  trackEvent('Purchase', {
    value: purchaseData.value,
    currency: purchaseData.currency,
    content_name: purchaseData.productName,
    content_category: 'template_purchase',
    content_type: 'digital_product',
    // Enhanced matching for better attribution
    em: purchaseData.userData.email ? btoa(purchaseData.userData.email.toLowerCase().trim()) : undefined,
    ph: purchaseData.userData.phone ? btoa(purchaseData.userData.phone.replace(/\D/g, '')) : undefined,
    fn: purchaseData.userData.firstName ? btoa(purchaseData.userData.firstName.toLowerCase().trim()) : undefined,
    ln: purchaseData.userData.lastName ? btoa(purchaseData.userData.lastName.toLowerCase().trim()) : undefined,
    // Product details
    num_items: 1,
    content_ids: [purchaseData.productName],
    custom_data: {
      template_type: purchaseData.templateType || 'ecommerce',
      business_type: purchaseData.businessType || 'web_development',
      delivery_method: 'digital',
      purchase_source: 'website',
      conversion_type: 'template_purchase'
    }
  });
};

// Track high-value actions for better optimization
export const trackHighValueAction = (actionType: string, value: number, currency: string, details?: any) => {
  trackEvent('Lead', {
    content_name: actionType,
    content_category: 'high_value_action',
    value: value,
    currency: currency,
    ...details
  });
};

// Track conversion value for better optimization
export const trackConversionValue = (conversionType: string, value: number, currency: string, customerLifetimeValue?: number) => {
  trackEvent('Lead', {
    content_name: conversionType,
    content_category: 'conversion_value',
    value: value,
    currency: currency,
    // Add lifetime value if available
    custom_data: {
      conversion_type: conversionType,
      customer_lifetime_value: customerLifetimeValue || value,
      conversion_source: 'website'
    }
  });
};

// Track template-specific events for better targeting
export const trackTemplateInterest = (templateType: string, interestLevel: string) => {
  trackEvent('ViewContent', {
    content_name: `Template Interest - ${templateType}`,
    content_category: 'template_interest',
    content_type: 'template',
    custom_data: {
      template_type: templateType,
      interest_level: interestLevel,
      interest_source: 'website_browse'
    }
  });
};
