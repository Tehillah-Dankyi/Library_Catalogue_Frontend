# Troubleshooting Blank Page Issue

## Common Causes and Solutions

### 1. Dependencies Not Installed ✅ FIXED
- **Solution**: Run `npm install` in the frontend directory
- **Status**: Already done

### 2. Backend Not Running
- **Symptom**: Blank page or "Loading..." stuck
- **Solution**: 
  ```bash
  cd ../backend
  npm install  # if not done
  npm run dev
  ```
- **Check**: Backend should be running on `http://localhost:5000`

### 3. Browser Console Errors
- **How to check**: 
  - Open browser DevTools (F12 or Right-click → Inspect)
  - Go to "Console" tab
  - Look for red error messages
- **Common errors**:
  - `Network Error` or `CORS Error` → Backend not running or CORS not configured
  - `Cannot read property...` → JavaScript error in code
  - `Failed to fetch` → Backend URL incorrect

### 4. Wrong URL
- **Correct URL**: `http://localhost:3000`
- **Not**: `file:///...` (file protocol won't work)

### 5. Environment Variables
- Create `.env` file in frontend directory:
  ```
  REACT_APP_API_URL=http://localhost:5000/api
  ```
- Restart dev server after creating `.env`

### 6. Clear Browser Cache
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Or clear browser cache completely

## Step-by-Step Debugging

1. **Check if React server is running**
   ```bash
   # Terminal should show:
   # Compiled successfully!
   # You can now view library-catalogue-frontend in the browser.
   # Local: http://localhost:3000
   ```

2. **Check browser console**
   - Open DevTools (F12)
   - Look for errors in Console tab
   - Check Network tab for failed requests

3. **Verify backend is running**
   ```bash
   # In backend directory
   npm run dev
   # Should show: Server running on port 5000
   ```

4. **Test backend directly**
   - Open: `http://localhost:5000/api/health`
   - Should return: `{"status":"OK","message":"Library Catalogue API is running"}`

5. **Check routing**
   - When you visit `http://localhost:3000`, it should redirect to `/login` if not authenticated
   - If you see a blank page, check console for errors

## Quick Fix Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] Backend running (`cd backend && npm run dev`)
- [ ] Frontend running (`cd frontend && npm start`)
- [ ] Browser console checked (F12 → Console)
- [ ] Correct URL (`http://localhost:3000`)
- [ ] `.env` file created with API URL
- [ ] Browser cache cleared

## Expected Behavior

When everything works:
1. Visit `http://localhost:3000`
2. Should redirect to `/login` page
3. See login form with "Library Catalogue" navbar
4. Can register or login

If you see a blank page:
- Check browser console (F12)
- Verify backend is running
- Check network tab for failed API calls






