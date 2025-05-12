import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Info, Calendar, AlertCircle, User, Mail, Phone } from 'lucide-react';

interface FormField {
  name: string;
  value: string;
  required: boolean;
  valid: boolean;
  touched: boolean;
  errorMessage: string;
}

interface EnhancedContactFormProps {
  propertyName?: string;
}

const EnhancedContactForm: React.FC<EnhancedContactFormProps> = ({ propertyName }) => {
  // Form fields with validation state
  const [formFields, setFormFields] = useState<Record<string, FormField>>({
    name: {
      name: 'name',
      value: '',
      required: true,
      valid: false,
      touched: false,
      errorMessage: 'Please enter your full name'
    },
    email: {
      name: 'email',
      value: '',
      required: true,
      valid: false,
      touched: false,
      errorMessage: 'Please enter a valid email address'
    },
    phone: {
      name: 'phone',
      value: '',
      required: false,
      valid: true,
      touched: false,
      errorMessage: 'Please enter a valid phone number'
    },
    department: {
      name: 'department',
      value: '',
      required: true,
      valid: false,
      touched: false,
      errorMessage: 'Please select a department'
    },
    propertyAddress: {
      name: 'propertyAddress',
      value: '',
      required: false,
      valid: true,
      touched: false,
      errorMessage: ''
    },
    message: {
      name: 'message',
      value: propertyName ? `I'm interested in property management services for ${propertyName}` : '',
      required: true,
      valid: false,
      touched: false,
      errorMessage: 'Please provide some details about your inquiry'
    }
  });
  
  const [formValid, setFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Validate the entire form whenever fields change
  useEffect(() => {
    const allFieldsValid = Object.values(formFields).every(field => !field.required || field.valid);
    setFormValid(allFieldsValid);
  }, [formFields]);
  
  // Validation functions
  const validateField = (name: string, value: string): boolean => {
    switch(name) {
      case 'name':
        return value.trim().length >= 2;
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case 'phone':
        // Optional field, but if provided, must be valid
        return value.trim() === '' || /^[\d\s()+-.]{10,15}$/.test(value);
      case 'department':
        return value.trim() !== '';
      case 'message':
        return value.trim().length >= 10;
      default:
        return true;
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const isValid = validateField(name, value);
    
    setFormFields(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        valid: isValid,
        touched: true
      }
    }));
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    
    setFormFields(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        touched: true
      }
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched to show validation errors
    const touchedFields = Object.entries(formFields).reduce((acc, [key, field]) => {
      return {
        ...acc,
        [key]: {
          ...field,
          touched: true
        }
      };
    }, {});
    
    setFormFields(touchedFields);
    
    // If form is valid, submit it
    if (formValid) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Form data to send
        const formData = Object.entries(formFields).reduce((acc, [key, field]) => {
          return {
            ...acc,
            [key]: field.value
          };
        }, {});
        
        console.log('Form submitted:', formData);
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after some time
        setTimeout(() => {
          setIsSubmitted(false);
          const resetFields = Object.entries(formFields).reduce((acc, [key, field]) => {
            return {
              ...acc,
              [key]: {
                ...field,
                value: '',
                valid: !field.required,
                touched: false
              }
            };
          }, {});
          setFormFields(resetFields);
        }, 8000);
      } catch (error) {
        setIsSubmitting(false);
        console.error('Error submitting form:', error);
      }
    }
  };
  
  // Helper to determine field status classes
  const getFieldStatusClasses = (field: FormField) => {
    if (!field.touched) return '';
    return field.valid 
      ? 'border-green-500 focus:ring-green-500' 
      : 'border-red-500 focus:ring-red-500';
  };
  
  return (
    <div className="p-0">
      {isSubmitted ? (
        <div className="text-center py-16 px-8 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
          <p className="text-gray-700 text-lg mb-6">
            Your message has been sent successfully. One of our property management specialists will contact you within 24 hours.
          </p>
          <div className="bg-white p-4 rounded-lg shadow-md inline-block">
            <div className="flex items-center text-gray-700">
              <Calendar size={20} className="text-blue-800 mr-2" />
              <span>A confirmation has been sent to your email.</span>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-blue-900">Contact Our Team</h3>
              <div className="flex items-center text-sm text-blue-800">
                <Info size={14} className="mr-1" />
                <span>Fields marked with * are required</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Our property management experts are ready to help with your inquiry
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md flex items-center mb-6">
              <Calendar size={20} className="mr-2 text-blue-700 flex-shrink-0" />
              <p className="text-blue-800 text-sm">Expecting a response? We'll get back to you within 24 hours during business days.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2 flex items-center">
                Full Name <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formFields.name.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-colors ${getFieldStatusClasses(formFields.name)}`}
                  placeholder="John Smith"
                  required
                />
              </div>
              {formFields.name.touched && !formFields.name.valid && (
                <p className="mt-1 text-red-500 text-sm flex items-center">
                  <AlertCircle size={14} className="mr-1" /> {formFields.name.errorMessage}
                </p>
              )}
              <p className="mt-1 text-gray-500 text-sm">First and last name</p>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2 flex items-center">
                Email Address <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formFields.email.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-colors ${getFieldStatusClasses(formFields.email)}`}
                  placeholder="your@email.com"
                  required
                />
              </div>
              {formFields.email.touched && !formFields.email.valid && (
                <p className="mt-1 text-red-500 text-sm flex items-center">
                  <AlertCircle size={14} className="mr-1" /> {formFields.email.errorMessage}
                </p>
              )}
              <p className="mt-1 text-gray-500 text-sm">We'll send a confirmation email</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number <span className="text-gray-400 text-sm font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone size={18} className="text-gray-500" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formFields.phone.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${getFieldStatusClasses(formFields.phone)}`}
                  placeholder="(123) 456-7890"
                />
              </div>
              {formFields.phone.touched && !formFields.phone.valid && (
                <p className="mt-1 text-red-500 text-sm flex items-center">
                  <AlertCircle size={14} className="mr-1" /> {formFields.phone.errorMessage}
                </p>
              )}
              <p className="mt-1 text-gray-500 text-sm">For faster communication if needed</p>
            </div>
            
            <div>
              <label htmlFor="department" className="block text-gray-700 font-medium mb-2 flex items-center">
                Department <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="department"
                name="department"
                value={formFields.department.value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors appearance-none bg-white ${getFieldStatusClasses(formFields.department)}`}
                required
              >
                <option value="">Select a department</option>
                <option value="property-management">Property Management</option>
                <option value="leasing">Leasing & Rentals</option>
                <option value="maintenance">Maintenance & Repairs</option>
                <option value="billing">Billing & Payments</option>
                <option value="general">General Inquiry</option>
              </select>
              {formFields.department.touched && !formFields.department.valid && (
                <p className="mt-1 text-red-500 text-sm flex items-center">
                  <AlertCircle size={14} className="mr-1" /> {formFields.department.errorMessage}
                </p>
              )}
              <p className="mt-1 text-gray-500 text-sm">Select the most relevant department</p>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="propertyAddress" className="block text-gray-700 font-medium mb-2">
              Property Address <span className="text-gray-400 text-sm font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="propertyAddress"
              name="propertyAddress"
              value={formFields.propertyAddress.value}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123 Main St, Anytown, ST 12345"
            />
            <p className="mt-1 text-gray-500 text-sm">If your inquiry is about a specific property</p>
          </div>
          
          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2 flex items-center">
              Message <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formFields.message.value}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={6}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-y ${getFieldStatusClasses(formFields.message)}`}
              placeholder="Provide details about your property management needs or questions..."
              required
            ></textarea>
            {formFields.message.touched && !formFields.message.valid && (
              <p className="mt-1 text-red-500 text-sm flex items-center">
                <AlertCircle size={14} className="mr-1" /> {formFields.message.errorMessage}
              </p>
            )}
            <p className="mt-1 text-gray-500 text-sm">Minimum 10 characters. Please include any specific questions or details.</p>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-800 text-white font-bold py-4 px-4 rounded-md transition-all duration-300 flex items-center justify-center hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'transform hover:-translate-y-1 hover:shadow-lg'}`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <Send size={20} className="mr-2" />
                Send Message
              </>
            )}
          </button>
          <p className="text-center text-gray-500 text-sm mt-4">
            By submitting this form, you agree to our <a href="#" className="text-blue-600 hover:underline">privacy policy</a> and <a href="#" className="text-blue-600 hover:underline">terms of service</a>.
          </p>
        </form>
      )}
    </div>
  );
};

export default EnhancedContactForm;
