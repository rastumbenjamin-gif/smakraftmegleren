import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

interface SignUpModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToLogin: () => void;
}

export const SignUpModal = ({ open, onOpenChange, onSwitchToLogin }: SignUpModalProps) => {
  const { signUp } = useAuth();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    investorType: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error(t('signup.passwordMismatch'));
      return;
    }

    if (formData.password.length < 6) {
      toast.error(t('signup.passwordTooShort'));
      return;
    }

    setLoading(true);

    console.log('SignUpModal: Submitting form with:', {
      email: formData.email,
      name: formData.name,
      phone: formData.phone
    });

    const { error } = await signUp(formData.email, formData.password, {
      name: formData.name,
      phone: formData.phone,
      investor_type: formData.investorType || undefined,
    });

    if (error) {
      console.error('SignUpModal: Signup error:', error);
      toast.error(t('signup.error') + ': ' + error.message);
    } else {
      console.log('SignUpModal: Signup successful');
      toast.success(t('signup.success'));
      onOpenChange(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        investorType: '',
      });
    }

    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t('signup.title')}</DialogTitle>
          <DialogDescription>
            {t('signup.description')}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t('signup.name')} *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t('signup.namePlaceholder')}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t('signup.email')} *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t('signup.emailPlaceholder')}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">{t('signup.phone')} *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t('signup.phonePlaceholder')}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="investorType">{t('signup.investorType')}</Label>
            <Select
              value={formData.investorType}
              onValueChange={(value) => setFormData({ ...formData, investorType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder={t('signup.selectInvestorType')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="private">
                  {t('registration.investorType.private')}
                </SelectItem>
                <SelectItem value="company">
                  {t('registration.investorType.company')}
                </SelectItem>
                <SelectItem value="fund">
                  {t('registration.investorType.fund')}
                </SelectItem>
                <SelectItem value="institutional">
                  {t('registration.investorType.institutional')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">{t('signup.password')} *</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder={t('signup.passwordPlaceholder')}
              required
              minLength={6}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">{t('signup.confirmPassword')} *</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              placeholder={t('signup.confirmPasswordPlaceholder')}
              required
              minLength={6}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? t('signup.loading') : t('signup.submit')}
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                onOpenChange(false);
                onSwitchToLogin();
              }}
              className="w-full"
            >
              {t('signup.switchToLogin')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
