import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

function ErrorState({ message, onRetry }) {
  return (
    <div className="flex justify-center items-center py-16">
      <Stack
        spacing={2}
        alignItems="center"
        sx={{ maxWidth: 420, width: '100%' }}
      >
        <Alert
          severity="error"
          icon={<ErrorOutlineIcon />}
          sx={{ width: '100%', borderRadius: 2 }}
        >
          <AlertTitle>Xatolik yuz berdi</AlertTitle>
          {message ||
            'Malumotlarni yuklashda muammo yuz berdi. Iltimos, qayta urinib koring.'}
        </Alert>

        {onRetry && (
          <Button
            variant="outlined"
            color="error"
            onClick={onRetry}
            sx={{ textTransform: 'none' }}
          >
            Qayta urinib ko‘rish
          </Button>
        )}
      </Stack>
    </div>
  )
}

export default ErrorState
