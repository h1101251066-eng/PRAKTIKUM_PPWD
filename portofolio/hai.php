<php?
class Balok
{
    public $panjang;
    public $lebar;
    public $tinggi;

    public function __construct($panjang, $lebar, $tinggi) {
        this->panjang = $panjang;
        this->lebar = $lebar;
        this->tinggi = $tinggi;
    }

    public function volume() : float {
        return $this->panjang * $this->lebar * $this->tinggi;
    }
}


$kardus = new Balok (15,10,5);
echo "volume kardus adalah" . $kardus->volume();